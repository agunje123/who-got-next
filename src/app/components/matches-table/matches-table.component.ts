import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';
import { Match } from 'src/assets/model/match.model';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.scss'],
})
export class MatchesTableComponent implements OnInit {
  tableData: Match[] = [];
  displayedColumns: string[] = [
    'courtName',
    'longitude',
    'latitude',
    'players',
  ];

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    this.tableData = await this.supabaseService.getMatches();
  }

  showForm() {
    
  }
}
