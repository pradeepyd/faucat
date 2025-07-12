import { useConnection, useWallet } from "@solana/wallet-adapter-react"


export function Airdrop(){
const wallet = useWallet();
const {connection} = useConnection();
function sendAirdropToUser(){
    if(!wallet.publicKey) return;
    //@ts-ignore
    const amount = document.getElementById("publicKey").value
    connection.requestAirdrop(wallet.publicKey, amount *1000000000)
}
    return (
        <div>
            <input id="publickey" type="text" placeholder="Amount"/>
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}