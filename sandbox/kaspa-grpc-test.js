#!/usr/bin/env node
const {Client} = require('@kaspa/grpc');


const PORTS = {
    mainnet : 42110,
    testnet : 42210,
    simnet : 42510,
    devnet : 42610
}
const NETWORK = 'devnet';

const client = new Client({
    clientConfig:{
        host:"127.0.0.1:"+PORTS[NETWORK]
    }
});
client.connect();
client.verbose = true;


let dump = (label, text, deco1="-", deco2="=")=>{
    console.log(`\n${label}:\n${deco1.repeat(100)}\n${text}\n${deco2.repeat(100)}\n`)
}

const test = async(name, data = {})=>{
    let response = await client.call(name, data)
    .catch(e=>{
        console.log(`{name}: request:error`, e)
    })

    console.log(`{name}: response`, response);

    client.disconnect();
}


if(1){
	test('getVirtualSelectedParentBlueScoreRequest');
}else{
	test('getMempoolEntriesRequest') //<--- work but return 'not implemented'
}
