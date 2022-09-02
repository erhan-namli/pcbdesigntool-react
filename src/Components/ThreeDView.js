import React from 'react'
import * as THREE from 'three';
import VRMLLoader from 'three-vrml-loader';
import { OrbitControls } from '@three-ts/orbit-controls';

let camera, scene, renderer, stats, controls, loader;

let vrmlScene;

function init() {


    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 1e10 );
    camera.position.z = 6;

    controls = new OrbitControls( camera);

    controls.rotateSpeed = 5.0;
    controls.zoomSpeed = 5;

    scene = new THREE.Scene();

    scene.background = new THREE.Color("#000000") 
    // scene.background = new THREE.Color(0xf5f5f5);

	scene.add( camera );

    var dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( 200, 200, 1000 ).normalize();

    loader = new VRMLLoader();

    loadAsset( "deneme" );
    // light

    // const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 );
    // scene.add( hemiLight );

    // const dirLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    // dirLight.position.set( 200, 200, 200 );

    // scene.add( dirLight );



    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth/2, window.innerHeight/2 );


    // controls

    

    controls.minDistance = 1;
    controls.maxDistance = 200;
    controls.enableDamping = true;
    renderer.setAnimationLoop( animation );
    document.body.appendChild( renderer.domElement );

}

function animation () {
    renderer.render( scene, camera );
}

function loadAsset( asset ) {

    loader.load(asset + '.wrl', function ( object ) {
        console.log(asset + '.wrl')
        vrmlScene = object;
        scene.add( object );
        controls.reset();

    } );

}

init()


const ThreeDView = () => {
  return (
    <div>

    </div>
  )
}

export default ThreeDView