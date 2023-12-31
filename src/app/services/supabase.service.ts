import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Match } from 'src/assets/model/match.model';
import { environment } from 'src/environments/environment.development';

export const MATCHES_TABLE = 'matches';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async createMatch(match: Match) {
    return this.supabase.from(MATCHES_TABLE).insert({
      court_name: match.court_name,
      player_count: match.player_count,
      players_required: match.players_required,
      longitude: match.longitude,
      latitude: match.latitude,
    });
  }

  async getMatches() {
    const matches = await this.supabase.from(MATCHES_TABLE).select(`
    id, player_count, players_required, court_name, longitude, latitude
    `);

    return matches.data || [];
  }
}
