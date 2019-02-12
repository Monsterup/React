import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const element = <h1>Hello world on variable</h1>

// function getMahasiswa(mahasiswa){
//     return 'Nama : ' + mahasiswa.nama + ' NIM : ' + mahasiswa.nim;
// }

// function getStatus(mahasiswa){
//     if(mahasiswa.angkatan < 2019){
//         return 'bukan mahasiswa baru';
//     }else{
//         return 'mahasiswa baru';
//     }
// }

// const mahasiswi = {
//     nama : 'lorem ipsum',
//     nim : '123456',
//     angkatan : 2018
// }

// const element = <h1>Halo, {getMahasiswa(mahasiswi)}, anda {getStatus(mahasiswi)}</h1>

function tick(){
    const element = (
        <div>
            <h1>Hello Cuyyy</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick,1000);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
