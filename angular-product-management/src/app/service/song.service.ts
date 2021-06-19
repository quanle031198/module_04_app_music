import { Injectable } from '@angular/core';
import { Song } from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  playlist: Song[] = [
    {
      id: 'yET2SBRuNm0',
      name: ' RPT Orijinn, LOW G, RZMas, RPT MCK - Thủ Đô Cypher'
    },
    {
      id: 'lQlIhraqL7o',
      name: 'thelonelyisland - I Just Had S*x (feat. Akon)'

    },
    {
      id: 'es0e6GA-EIw',
      name: 'Wowy Karik - Khu Tao Song '
    },
    {
      id: 'xypzmu5mMPY',
      name: 'Son Tung MTP - Muon roi ma sao con'
    },
    {
      id: 'P8qEusQiwsw',
      name: 'HIEUTHUHAI - CUA'
    }
  ];
  constructor() { }

  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
