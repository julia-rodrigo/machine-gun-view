import { Hero, CanvasScene, GunScene } from "@/components";
import * as THREE from 'three';

const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const Dashboard = () => {
  return (
    <div>
        <main
            className="overflow-hidden main"
        >
            <CanvasScene />
        </main>
    </div>
  )
}

export default Dashboard