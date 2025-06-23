"use client";

import EthereumIcon from "./icons/ethereum-icon";
import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import { useAccount, useConnect, useBalance, useCall, useSendTransaction, useContract } from "@starknet-react/core";
import { erc20_abi, vault_abi } from "@/abis";
import { ETH_CONTRACT_ADDRESS, VAULT_CONTRACT_ADDRESS } from "@/constant";
import { useState } from "react";

export default function DepositComponent() {
    const { connect, connectors } = useConnect();
    const { isConnected, address } = useAccount();
    const [depositAmount, setDepositAmount] = useState(0);
    const { starknetkitConnectModal } = useStarknetkitConnectModal({
        connectors: connectors as StarknetkitConnector[]
    })
    async function connectWallet() {
        const { connector } = await starknetkitConnectModal()
        if (!connector) {
          return
        }
       
        connect({ connector })
    }
    const { data} = useBalance({
        address
    })
    const { data: totalAmountLocked } = useCall({
        abi: vault_abi,
        functionName: "get_user_balance",
        address: VAULT_CONTRACT_ADDRESS,
        args: [address as never]
    })
    const { data: totalLocked } = useCall({
        abi: vault_abi,
        functionName: "total_supply",
        address: VAULT_CONTRACT_ADDRESS,
        args: []
    })
    const { contract: ethContract } = useContract({
        address: ETH_CONTRACT_ADDRESS,
        abi: erc20_abi as never
    })
    const { contract: vaultContract } = useContract({
        address: VAULT_CONTRACT_ADDRESS,
        abi: vault_abi as never
    })
    const { send } = useSendTransaction({
        calls: ethContract && vaultContract ? [
            ethContract.populate("approve" as never, [VAULT_CONTRACT_ADDRESS, depositAmount] as never),
            vaultContract.populate("deposit" as never, [depositAmount] as never)
        ] : undefined
    })
    return(
        <div className="w-full h-[620px] rounded-3xl border-2 border-[#1E1E1E] p-6">
            <div className="space-y-5 h-full">
                <div className="w-full h-fit rounded-3xl bg-[#171717] border-2 border-[#1E1E1E] p-6">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="text-white text-lg">Deposit</h4>
                        <h4 className="text-white/50 text-lg">Balance: {data?.formatted || 0} ETH</h4>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-1.5">
                        <input placeholder="0" className="outline-0 ring-0 placeholder:text-3xl text-3xl pt-1.5 flex-1 text-white" type="number" onChange={(e) => setDepositAmount(Number(e.target.value))}  />
                        <div className="flex flex-row items-center justify-center space-x-1">
                            <EthereumIcon />
                            <h4 className="text-2xl text-white">ETH</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit rounded-3xl bg-transparent border-2 border-[#1E1E1E] p-6">
                    <div className="flex flex-row items-start justify-between">
                        <h4 className="text-white text-lg">Receive</h4>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-1.5">
                        <h4 className="text-3xl text-white">-</h4>
                        <div className="flex flex-row items-center justify-center space-x-1">
                            <EthereumIcon />
                            <h4 className="text-2xl text-white">xETH</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full h-70 rounded-3xl bg-[#171717] border-2 border-[#1E1E1E] p-6">
                    <div className="flex flex-col h-full w-full">
                        <div className="w-full h-full space-y-5">
                            <h4 className="text-white text-lg">Stats</h4>
                            <div className="w-full h-0.5 bg-[#1E1E1E]" />
                        </div>
                        <div className="space-y-1.5 h-[400px]">
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-white/50 text-lg">Yield</h4>
                                <h4 className="text-white text-lg">15.6%</h4>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-white/50 text-lg">Total Amount</h4>
                                <h4 className="text-white text-lg">{Number(totalAmountLocked) || 0} xETH</h4>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <h4 className="text-white/50 text-lg">Total Locked</h4>
                                <h4 className="text-white text-lg">{Number(totalLocked) || 0} xETH</h4>
                            </div>
                        </div>
                        <button onClick={isConnected ? () => send() : connectWallet} className="w-full py-3 bg-[#503EE5] text-white border-0 rounded-xl hover:cursor-pointer">
                            {isConnected ? "Deposit" : "Connect Wallet"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}