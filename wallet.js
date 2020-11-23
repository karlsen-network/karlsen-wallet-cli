#!/usr/bin/env node

const { Command } = require('commander');
const { Wallet, bitcoreKaspaSetup } = require('kaspa-module').default;
const {RPC} = require('kaspa-module-node');


bitcoreKaspaSetup();

const rpc = new RPC({
    clientConfig:{
        host:"127.0.0.1:16210"
    }
})
const proto = rpc.client.proto;
const methods = proto.KaspadMessage.type.field
    .filter(({name})=>/request/i.test(name));//.map(f=>f.name)
//console.log("methods", methods);//proto.KaspadMessage.type.field)
rpc.disconnect();

/*
Wallet.setRPC(rpc)
*/


const program = new Command();

let dump = (label, text, deco1="-", deco2="=")=>{
    console.log(`\n${label}:\n${deco1.repeat(100)}\n${text}\n${deco2.repeat(100)}\n`)
}

program
    .version('0.0.1')
    .description('Kaspa Wallet client');

program
    .command('create')
    .description('Create Kaspa wallet')
    .option('-p, --password <password>', "Password for wallet")
    .action(async (cmd, options) => {
        //console.log(Wallet)
        //console.log(cmd.password)
        const wallet = new Wallet();
        const encryptedMnemonic = await wallet.export(cmd.password);

        dump("mnemonic created", wallet.mnemonic)
        dump("Encrypted Mnemonic", encryptedMnemonic)

        let _wallet = await Wallet.import(cmd.password, encryptedMnemonic)
        dump("wallet imported", _wallet.mnemonic)
    })

program
    .command('test-rpc')
    .description('RPC test')
    .option('-m, --method <method>', "rpc request, default will be 'getBlockDagInfoRequest' ")
    .option('-j, --json <json_data>', "rpc request args as json string, default will be '{}' ")
    .action(async (cmd, options) => {
        let {json_data='{}', method='getBlockDagInfoRequest'} = cmd;
        //console.log("method, json_data:", method, json_data)
        let args = JSON.parse(json_data)
        console.log("method, args:", method, args)
        let result = await rpc.request(method, args);
        console.log("Result:\n", result)
        rpc.disconnect();
    })

methods.slice(0, 2).forEach(method=>{
    const {name, typeName} = method;
    //console.log("method", method, proto[typeName])
    let fields = proto[typeName].type.field;
    //console.log("fields", fields)

    let cmd = program.command(name).description(`RPC CALL ${name}`)
    fields.forEach(f=>{
        cmd.option(`--${f.name} <${f.name}>`, `Request argument ${f.name} of ${f.type}, default will be (${f.defaultValue}) `)
    })
        
    cmd.action(async (cmd, options) => {
        
        let args = {};

        fields.forEach(f=>{
            if(cmd[f.name] !== undefined){
                args[f.name] = cmd[f.name] || 1;
            }
        })

        console.log("Calling:", name+"\n")
        console.log("Arguments:", JSON.stringify(args, null, "  "))
        let result = await rpc.request(name, args);
        console.log("Result:\n", result)
        rpc.disconnect();
    })
})




program.parse(process.argv);
