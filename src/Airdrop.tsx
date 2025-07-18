import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useRef } from "react";


export function Airdrop(){
    const amountRef = useRef<HTMLInputElement>(null);
const wallet = useWallet();
const {connection} = useConnection();
function sendAirdropToUser(){
    if(!wallet.publicKey) return;
    const amount = Number(amountRef.current?.value || 0);
    if (amount === undefined) {
  console.error("Amount input not found.");
}

    connection.requestAirdrop(wallet.publicKey, amount *1000000000)
}
    return (
        <div className="space-y-8">
            <h1>welcome to solana faucat</h1>
            <input ref={amountRef} id="publickey" type="text" placeholder="Amount"/>
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}