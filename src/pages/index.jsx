'use client';

import Head from 'next/head'
import ConnectToRobot from './components/connectToRobot';
import ControlPanel from './components/controlPanel';
import {useGlobalContext} from '../context/store';
import PositionPanel from './components/PositionPanel'
export default function Home() {
  const {isConnected} = useGlobalContext();
  return (
    <>
      <Head>
        <title>Isabelle Wireless Controller</title>
        <meta name="description" content="Wireless controller for the Isabelle robot." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen flex flex-col justify-center items-center hexagon_background space-y-5">
        {!isConnected && <ConnectToRobot /> }
        {isConnected && <ControlPanel />}
        {isConnected && <PositionPanel />}
      </main>
    </>
  )
}
