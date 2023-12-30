import { Component } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss'],
})
export class MatchesTableComponent {

  tableData = [
    { name: 'Central Park Court', longitude: -73.968676, latitude: 40.785091, playerCount: 4, playersNeeded: 6 },
    { name: 'Downtown Tennis Club', longitude: -74.005972, latitude: 40.714273, playerCount: 3, playersNeeded: 6 },
    { name: 'Sunset Courts', longitude: -73.992987, latitude: 40.732154, playerCount: 2, playersNeeded: 10 },
  ];
  displayedColumns: string[] = ['name', 'longitude', 'latitude', 'players'];

}
