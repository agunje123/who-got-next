export class Match {
  id: number;
  player_count: number;
  players_required: number;
  court_name: string;
  longitude: number;
  latitude: number;

  constructor(
    player_count: number,
    players_required: number,
    court_name: string,
    longitude: number,
    latitude: number
  ) {
    this.player_count = player_count;
    this.players_required = players_required;
    this.court_name = court_name;
    this.longitude = longitude;
    this.latitude = latitude;
  }
}
