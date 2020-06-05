
var w = 500,
h = 500;
var data = [
   {
      "Team":"Manchester City",
      "category":"Champions League",
      "general_league_position":1,
      "finance _live_games_televised":26,
      "finance _tv_revenue":150986355,
      "general_matches_played":38,
      "general_won":32,
      "general_draw":2,
      "general_lost":4,
      "attack_scored":95,
      "defence_goals_conceeded":23,
      "general_goal_difference":72,
      "general_points":98,
      "general_squad_size":25,
      "general_squad_average_age":27.1,
      "general_squad_foreigners":20,
      "finance_team_market":1003200000,
      "finance_market_average":39987200,
      "attack_passes":26581,
      "attack_passes_through":112,
      "attack_passes_long":1.814,
      "attack_passes_back":4.240,
      "attack_crosses":783,
      "attack_corners_taken":298,
      "attack_shots":683,
      "attack_shots_on_target":260,
      "attack_goals_headed":12,
      "attack_goals_penalty":3,
      "attack_goals_box":80,
      "attack_goals_outsidebox":15,
      "general_card_yellow":44,
      "general_card_red":1,
      "attack_goals_counter":5,
      "attack_goals_freekick":2,
      "defence_saves":58,
      "defence_blocks":63,
      "defence_interceptions":362,
      "defence_tackles":518,
      "defence_tackles_last_man":0,
      "defence_clearances":543,
      "defence_clearances_headed":295,
      "defence_penalty_conceeded":4,
      "attack_posession":64,
      "attack_pass_accuracy":89
   },
   {
      "Team":"Liverpool",
      "category":"Champions League",
      "general_league_position":2,
      "finance _live_games_televised":29,
      "finance _tv_revenue":152425146,
      "general_matches_played":38,
      "general_won":30,
      "general_draw":7,
      "general_lost":1,
      "attack_scored":89,
      "defence_goals_conceeded":22,
      "general_goal_difference":67,
      "general_points":97,
      "general_squad_size":24,
      "general_squad_average_age":26.8,
      "general_squad_foreigners":16,
      "finance_team_market":836440000,
      "finance_market_average":34848000,
      "attack_passes":23638,
      "attack_passes_through":98,
      "attack_passes_long":2.250,
      "attack_passes_back":3.416,
      "attack_crosses":721,
      "attack_corners_taken":249,
      "attack_shots":575,
      "attack_shots_on_target":226,
      "attack_goals_headed":19,
      "attack_goals_penalty":7,
      "attack_goals_box":84,
      "attack_goals_outsidebox":5,
      "general_card_yellow":38,
      "general_card_red":2,
      "attack_goals_counter":6,
      "attack_goals_freekick":1,
      "defence_saves":76,
      "defence_blocks":78,
      "defence_interceptions":314,
      "defence_tackles":610,
      "defence_tackles_last_man":2,
      "defence_clearances":639,
      "defence_clearances_headed":317,
      "defence_penalty_conceeded":1,
      "attack_posession":58.8,
      "attack_pass_accuracy":84.4
   },
   {
      "Team":"Chelsea",
      "category":"Champions League Qualification",
      "general_league_position":3,
      "finance _live_games_televised":25,
      "finance _tv_revenue":146030216,
      "general_matches_played":38,
      "general_won":21,
      "general_draw":9,
      "general_lost":8,
      "attack_scored":63,
      "defence_goals_conceeded":39,
      "general_goal_difference":24,
      "general_points":72,
      "general_squad_size":26,
      "general_squad_average_age":28.1,
      "general_squad_foreigners":19,
      "finance_team_market":779460000,
      "finance_market_average":29981600,
      "attack_passes":25070,
      "attack_passes_through":146,
      "attack_passes_long":1.774,
      "attack_passes_back":3.874,
      "attack_crosses":692,
      "attack_corners_taken":215,
      "attack_shots":607,
      "attack_shots_on_target":198,
      "attack_goals_headed":8,
      "attack_goals_penalty":5,
      "attack_goals_box":54,
      "attack_goals_outsidebox":9,
      "general_card_yellow":49,
      "general_card_red":0,
      "attack_goals_counter":1,
      "attack_goals_freekick":1,
      "defence_saves":85,
      "defence_blocks":73,
      "defence_interceptions":351,
      "defence_tackles":618,
      "defence_tackles_last_man":2,
      "defence_clearances":593,
      "defence_clearances_headed":330,
      "defence_penalty_conceeded":2,
      "attack_posession":59.9,
      "attack_pass_accuracy":87.6
   },
   {
      "Team":"Tottenham",
      "category":"Champions League Qualification",
      "general_league_position":4,
      "finance _live_games_televised":26,
      "finance _tv_revenue":145230801,
      "general_matches_played":38,
      "general_won":23,
      "general_draw":2,
      "general_lost":13,
      "attack_scored":67,
      "defence_goals_conceeded":39,
      "general_goal_difference":28,
      "general_points":71,
      "general_squad_size":25,
      "general_squad_average_age":27,
      "general_squad_foreigners":17,
      "finance_team_market":735240000,
      "finance_market_average":29409600,
      "attack_passes":21295,
      "attack_passes_through":87,
      "attack_passes_long":2.267,
      "attack_passes_back":3.191,
      "attack_crosses":643,
      "attack_corners_taken":194,
      "attack_shots":537,
      "attack_shots_on_target":189,
      "attack_goals_headed":14,
      "attack_goals_penalty":4,
      "attack_goals_box":53,
      "attack_goals_outsidebox":14,
      "general_card_yellow":56,
      "general_card_red":3,
      "attack_goals_counter":5,
      "attack_goals_freekick":2,
      "defence_saves":121,
      "defence_blocks":112,
      "defence_interceptions":326,
      "defence_tackles":626,
      "defence_tackles_last_man":3,
      "defence_clearances":770,
      "defence_clearances_headed":411,
      "defence_penalty_conceeded":5,
      "attack_posession":56.7,
      "attack_pass_accuracy":83.2
   },
   {
      "Team":"Arsenal",
      "category":"Europa League",
      "general_league_position":5,
      "finance _live_games_televised":25,
      "finance _tv_revenue":142193180,
      "general_matches_played":38,
      "general_won":21,
      "general_draw":7,
      "general_lost":10,
      "attack_scored":73,
      "defence_goals_conceeded":51,
      "general_goal_difference":22,
      "general_points":70,
      "general_squad_size":26,
      "general_squad_average_age":27.5,
      "general_squad_foreigners":18,
      "finance_team_market":701800000,
      "finance_market_average":26989600,
      "attack_passes":20805,
      "attack_passes_through":65,
      "attack_passes_long":2.062,
      "attack_passes_back":3.102,
      "attack_crosses":605,
      "attack_corners_taken":209,
      "attack_shots":467,
      "attack_shots_on_target":170,
      "attack_goals_headed":5,
      "attack_goals_penalty":4,
      "attack_goals_box":62,
      "attack_goals_outsidebox":11,
      "general_card_yellow":72,
      "general_card_red":2,
      "attack_goals_counter":3,
      "attack_goals_freekick":3,
      "defence_saves":133,
      "defence_blocks":118,
      "defence_interceptions":412,
      "defence_tackles":609,
      "defence_tackles_last_man":2,
      "defence_clearances":762,
      "defence_clearances_headed":404,
      "defence_penalty_conceeded":7,
      "attack_posession":56.1,
      "attack_pass_accuracy":83.3
   },
   {
      "Team":"Manchester United",
      "category":"Europa League",
      "general_league_position":6,
      "finance _live_games_televised":27,
      "finance _tv_revenue":142512868,
      "general_matches_played":38,
      "general_won":19,
      "general_draw":9,
      "general_lost":10,
      "attack_scored":65,
      "defence_goals_conceeded":54,
      "general_goal_difference":11,
      "general_points":66,
      "general_squad_size":26,
      "general_squad_average_age":27.3,
      "general_squad_foreigners":21,
      "finance_team_market":550440000,
      "finance_market_average":22017600,
      "attack_passes":19202,
      "attack_passes_through":63,
      "attack_passes_long":2.242,
      "attack_passes_back":2.634,
      "attack_crosses":638,
      "attack_corners_taken":200,
      "attack_shots":526,
      "attack_shots_on_target":225,
      "attack_goals_headed":4,
      "attack_goals_penalty":9,
      "attack_goals_box":55,
      "attack_goals_outsidebox":10,
      "general_card_yellow":73,
      "general_card_red":4,
      "attack_goals_counter":4,
      "attack_goals_freekick":2,
      "defence_saves":122,
      "defence_blocks":128,
      "defence_interceptions":355,
      "defence_tackles":581,
      "defence_tackles_last_man":2,
      "defence_clearances":785,
      "defence_clearances_headed":370,
      "defence_penalty_conceeded":6,
      "attack_posession":53.3,
      "attack_pass_accuracy":82.3
   },
   {
      "Team":"Wolverhampton",
      "category":"Europa League Qualification",
      "general_league_position":7,
      "finance _live_games_televised":15,
      "finance _tv_revenue":127165114,
      "general_matches_played":38,
      "general_won":16,
      "general_draw":9,
      "general_lost":13,
      "attack_scored":47,
      "defence_goals_conceeded":46,
      "general_goal_difference":1,
      "general_points":57,
      "general_squad_size":23,
      "general_squad_average_age":27.2,
      "general_squad_foreigners":13,
      "finance_team_market":369600000,
      "finance_market_average":16068800,
      "attack_passes":16618,
      "attack_passes_through":51,
      "attack_passes_long":2.552,
      "attack_passes_back":2.515,
      "attack_crosses":622,
      "attack_corners_taken":195,
      "attack_shots":477,
      "attack_shots_on_target":152,
      "attack_goals_headed":10,
      "attack_goals_penalty":4,
      "attack_goals_box":44,
      "attack_goals_outsidebox":3,
      "general_card_yellow":72,
      "general_card_red":1,
      "attack_goals_counter":5,
      "attack_goals_freekick":2,
      "defence_saves":100,
      "defence_blocks":148,
      "defence_interceptions":501,
      "defence_tackles":720,
      "defence_tackles_last_man":2,
      "defence_clearances":824,
      "defence_clearances_headed":464,
      "defence_penalty_conceeded":4,
      "attack_posession":47.4,
      "attack_pass_accuracy":78.2
   },
   {
      "Team":"Everton",
      "category":"No UEFA Competitions",
      "general_league_position":8,
      "finance _live_games_televised":18,
      "finance _tv_revenue":128603905,
      "general_matches_played":38,
      "general_won":15,
      "general_draw":9,
      "general_lost":14,
      "attack_scored":54,
      "defence_goals_conceeded":46,
      "general_goal_difference":8,
      "general_points":54,
      "general_squad_size":26,
      "general_squad_average_age":27,
      "general_squad_foreigners":16,
      "finance_team_market":305360000,
      "finance_market_average":11748000,
      "attack_passes":16494,
      "attack_passes_through":44,
      "attack_passes_long":2.310,
      "attack_passes_back":2.362,
      "attack_crosses":814,
      "attack_corners_taken":215,
      "attack_shots":498,
      "attack_shots_on_target":169,
      "attack_goals_headed":13,
      "attack_goals_penalty":2,
      "attack_goals_box":45,
      "attack_goals_outsidebox":10,
      "general_card_yellow":55,
      "general_card_red":4,
      "attack_goals_counter":3,
      "attack_goals_freekick":0,
      "defence_saves":94,
      "defence_blocks":85,
      "defence_interceptions":456,
      "defence_tackles":700,
      "defence_tackles_last_man":4,
      "defence_clearances":825,
      "defence_clearances_headed":430,
      "defence_penalty_conceeded":5,
      "attack_posession":51,
      "attack_pass_accuracy":77.3
   },
   {
      "Team":"Leicester",
      "category":"No UEFA Competitions",
      "general_league_position":9,
      "finance _live_games_televised":15,
      "finance _tv_revenue":123328078,
      "general_matches_played":38,
      "general_won":15,
      "general_draw":7,
      "general_lost":16,
      "attack_scored":51,
      "defence_goals_conceeded":48,
      "general_goal_difference":3,
      "general_points":52,
      "general_squad_size":26,
      "general_squad_average_age":29,
      "general_squad_foreigners":18,
      "finance_team_market":284240000,
      "finance_market_average":10929600,
      "attack_passes":17219,
      "attack_passes_through":88,
      "attack_passes_long":2.335,
      "attack_passes_back":2.593,
      "attack_crosses":779,
      "attack_corners_taken":210,
      "attack_shots":515,
      "attack_shots_on_target":184,
      "attack_goals_headed":9,
      "attack_goals_penalty":5,
      "attack_goals_box":43,
      "attack_goals_outsidebox":8,
      "general_card_yellow":57,
      "general_card_red":5,
      "attack_goals_counter":8,
      "attack_goals_freekick":3,
      "defence_saves":90,
      "defence_blocks":96,
      "defence_interceptions":436,
      "defence_tackles":676,
      "defence_tackles_last_man":4,
      "defence_clearances":945,
      "defence_clearances_headed":500,
      "defence_penalty_conceeded":5,
      "attack_posession":50.8,
      "attack_pass_accuracy":79.2
   },
   {
      "Team":"West Ham",
      "category":"No UEFA Competitions",
      "general_league_position":10,
      "finance _live_games_televised":16,
      "finance _tv_revenue":122528663,
      "general_matches_played":38,
      "general_won":15,
      "general_draw":7,
      "general_lost":16,
      "attack_scored":52,
      "defence_goals_conceeded":55,
      "general_goal_difference":-3,
      "general_points":52,
      "general_squad_size":26,
      "general_squad_average_age":28.3,
      "general_squad_foreigners":18,
      "finance_team_market":234212000,
      "finance_market_average":9011200,
      "attack_passes":16358,
      "attack_passes_through":75,
      "attack_passes_long":2.315,
      "attack_passes_back":2.273,
      "attack_crosses":630,
      "attack_corners_taken":188,
      "attack_shots":441,
      "attack_shots_on_target":157,
      "attack_goals_headed":10,
      "attack_goals_penalty":5,
      "attack_goals_box":47,
      "attack_goals_outsidebox":5,
      "general_card_yellow":59,
      "general_card_red":1,
      "attack_goals_counter":3,
      "attack_goals_freekick":0,
      "defence_saves":148,
      "defence_blocks":141,
      "defence_interceptions":457,
      "defence_tackles":723,
      "defence_tackles_last_man":5,
      "defence_clearances":855,
      "defence_clearances_headed":397,
      "defence_penalty_conceeded":5,
      "attack_posession":49,
      "attack_pass_accuracy":78.7
   },
   {
      "Team":"Watford",
      "category":"No UEFA Competitions",
      "general_league_position":11,
      "finance _live_games_televised":10,
      "finance _tv_revenue":113895527,
      "general_matches_played":38,
      "general_won":14,
      "general_draw":8,
      "general_lost":16,
      "attack_scored":52,
      "defence_goals_conceeded":59,
      "general_goal_difference":-7,
      "general_points":50,
      "general_squad_size":25,
      "general_squad_average_age":26.8,
      "general_squad_foreigners":12,
      "finance_team_market":229240000,
      "finance_market_average":9169600,
      "attack_passes":15462,
      "attack_passes_through":32,
      "attack_passes_long":2.437,
      "attack_passes_back":2.314,
      "attack_crosses":570,
      "attack_corners_taken":177,
      "attack_shots":437,
      "attack_shots_on_target":152,
      "attack_goals_headed":8,
      "attack_goals_penalty":1,
      "attack_goals_box":44,
      "attack_goals_outsidebox":8,
      "general_card_yellow":77,
      "general_card_red":4,
      "attack_goals_counter":3,
      "attack_goals_freekick":0,
      "defence_saves":127,
      "defence_blocks":120,
      "defence_interceptions":426,
      "defence_tackles":655,
      "defence_tackles_last_man":8,
      "defence_clearances":956,
      "defence_clearances_headed":447,
      "defence_penalty_conceeded":5,
      "attack_posession":47.4,
      "attack_pass_accuracy":76.1
   },
   {
      "Team":"Crystal Palace",
      "category":"No UEFA Competitions",
      "general_league_position":12,
      "finance _live_games_televised":12,
      "finance _tv_revenue":114215215,
      "general_matches_played":38,
      "general_won":14,
      "general_draw":7,
      "general_lost":17,
      "attack_scored":51,
      "defence_goals_conceeded":53,
      "general_goal_difference":-2,
      "general_points":49,
      "general_squad_size":27,
      "general_squad_average_age":26.8,
      "general_squad_foreigners":22,
      "finance_team_market":223520000,
      "finance_market_average":8280800,
      "attack_passes":15243,
      "attack_passes_through":26,
      "attack_passes_long":2.259,
      "attack_passes_back":2.233,
      "attack_crosses":577,
      "attack_corners_taken":205,
      "attack_shots":493,
      "attack_shots_on_target":148,
      "attack_goals_headed":5,
      "attack_goals_penalty":10,
      "attack_goals_box":43,
      "attack_goals_outsidebox":8,
      "general_card_yellow":58,
      "general_card_red":2,
      "attack_goals_counter":2,
      "attack_goals_freekick":2,
      "defence_saves":113,
      "defence_blocks":141,
      "defence_interceptions":446,
      "defence_tackles":730,
      "defence_tackles_last_man":2,
      "defence_clearances":940,
      "defence_clearances_headed":467,
      "defence_penalty_conceeded":5,
      "attack_posession":46.6,
      "attack_pass_accuracy":76.8
   },
   {
      "Team":"Newcastle",
      "category":"No UEFA Competitions",
      "general_league_position":13,
      "finance _live_games_televised":19,
      "finance _tv_revenue":120130418,
      "general_matches_played":38,
      "general_won":12,
      "general_draw":9,
      "general_lost":17,
      "attack_scored":42,
      "defence_goals_conceeded":48,
      "general_goal_difference":-6,
      "general_points":45,
      "general_squad_size":20,
      "general_squad_average_age":26.1,
      "general_squad_foreigners":14,
      "finance_team_market":214060000,
      "finance_market_average":10700800,
      "attack_passes":13490,
      "attack_passes_through":50,
      "attack_passes_long":2.680,
      "attack_passes_back":1.999,
      "attack_crosses":711,
      "attack_corners_taken":181,
      "attack_shots":446,
      "attack_shots_on_target":142,
      "attack_goals_headed":12,
      "attack_goals_penalty":1,
      "attack_goals_box":40,
      "attack_goals_outsidebox":2,
      "general_card_yellow":57,
      "general_card_red":2,
      "attack_goals_counter":1,
      "attack_goals_freekick":1,
      "defence_saves":95,
      "defence_blocks":134,
      "defence_interceptions":506,
      "defence_tackles":714,
      "defence_tackles_last_man":4,
      "defence_clearances":1120,
      "defence_clearances_headed":564,
      "defence_penalty_conceeded":7,
      "attack_posession":42.9,
      "attack_pass_accuracy":72.9
   },
   {
      "Team":"Bournemouth",
      "category":"No UEFA Competitions",
      "general_league_position":14,
      "finance _live_games_televised":10,
      "finance _tv_revenue":108139973,
      "general_matches_played":38,
      "general_won":13,
      "general_draw":6,
      "general_lost":19,
      "attack_scored":56,
      "defence_goals_conceeded":70,
      "general_goal_difference":-14,
      "general_points":45,
      "general_squad_size":25,
      "general_squad_average_age":26.2,
      "general_squad_foreigners":12,
      "finance_team_market":200288000,
      "finance_market_average":8008000,
      "attack_passes":15943,
      "attack_passes_through":57,
      "attack_passes_long":1.932,
      "attack_passes_back":2.249,
      "attack_crosses":613,
      "attack_corners_taken":191,
      "attack_shots":446,
      "attack_shots_on_target":163,
      "attack_goals_headed":11,
      "attack_goals_penalty":7,
      "attack_goals_box":50,
      "attack_goals_outsidebox":6,
      "general_card_yellow":60,
      "general_card_red":1,
      "attack_goals_counter":9,
      "attack_goals_freekick":0,
      "defence_saves":110,
      "defence_blocks":152,
      "defence_interceptions":371,
      "defence_tackles":526,
      "defence_tackles_last_man":5,
      "defence_clearances":1019,
      "defence_clearances_headed":515,
      "defence_penalty_conceeded":5,
      "attack_posession":47.7,
      "attack_pass_accuracy":78.1
   },
   {
      "Team":"Burnley",
      "category":"No UEFA Competitions",
      "general_league_position":15,
      "finance _live_games_televised":11,
      "finance _tv_revenue":107340558,
      "general_matches_played":38,
      "general_won":11,
      "general_draw":7,
      "general_lost":20,
      "attack_scored":45,
      "defence_goals_conceeded":68,
      "general_goal_difference":-23,
      "general_points":40,
      "general_squad_size":26,
      "general_squad_average_age":27.3,
      "general_squad_foreigners":20,
      "finance_team_market":176440000,
      "finance_market_average":6784800,
      "attack_passes":13011,
      "attack_passes_through":35,
      "attack_passes_long":2.898,
      "attack_passes_back":2.046,
      "attack_crosses":693,
      "attack_corners_taken":140,
      "attack_shots":360,
      "attack_shots_on_target":116,
      "attack_goals_headed":13,
      "attack_goals_penalty":2,
      "attack_goals_box":43,
      "attack_goals_outsidebox":2,
      "general_card_yellow":75,
      "general_card_red":1,
      "attack_goals_counter":1,
      "attack_goals_freekick":0,
      "defence_saves":140,
      "defence_blocks":222,
      "defence_interceptions":365,
      "defence_tackles":583,
      "defence_tackles_last_man":5,
      "defence_clearances":1080,
      "defence_clearances_headed":539,
      "defence_penalty_conceeded":5,
      "attack_posession":43.4,
      "attack_pass_accuracy":70.3
   },
   {
      "Team":"Southampton",
      "category":"No UEFA Competitions",
      "general_league_position":16,
      "finance _live_games_televised":10,
      "finance _tv_revenue":104302937,
      "general_matches_played":38,
      "general_won":9,
      "general_draw":12,
      "general_lost":17,
      "attack_scored":45,
      "defence_goals_conceeded":65,
      "general_goal_difference":-20,
      "general_points":39,
      "general_squad_size":28,
      "general_squad_average_age":28,
      "general_squad_foreigners":22,
      "finance_team_market":160072000,
      "finance_market_average":5720000,
      "attack_passes":14297,
      "attack_passes_through":35,
      "attack_passes_long":2.394,
      "attack_passes_back":2.040,
      "attack_crosses":664,
      "attack_corners_taken":193,
      "attack_shots":483,
      "attack_shots_on_target":162,
      "attack_goals_headed":4,
      "attack_goals_penalty":4,
      "attack_goals_box":31,
      "attack_goals_outsidebox":14,
      "general_card_yellow":71,
      "general_card_red":3,
      "attack_goals_counter":1,
      "attack_goals_freekick":3,
      "defence_saves":114,
      "defence_blocks":153,
      "defence_interceptions":548,
      "defence_tackles":699,
      "defence_tackles_last_man":4,
      "defence_clearances":1068,
      "defence_clearances_headed":502,
      "defence_penalty_conceeded":3,
      "attack_posession":45.4,
      "attack_pass_accuracy":74
   },
   {
      "Team":"Brighton",
      "category":"No UEFA Competitions",
      "general_league_position":17,
      "finance _live_games_televised":13,
      "finance _tv_revenue":105741728,
      "general_matches_played":38,
      "general_won":9,
      "general_draw":9,
      "general_lost":20,
      "attack_scored":35,
      "defence_goals_conceeded":60,
      "general_goal_difference":-25,
      "general_points":36,
      "general_squad_size":23,
      "general_squad_average_age":28.4,
      "general_squad_foreigners":16,
      "finance_team_market":152680000,
      "finance_market_average":6635200,
      "attack_passes":14109,
      "attack_passes_through":15,
      "attack_passes_long":2.623,
      "attack_passes_back":2.072,
      "attack_crosses":636,
      "attack_corners_taken":156,
      "attack_shots":371,
      "attack_shots_on_target":108,
      "attack_goals_headed":10,
      "attack_goals_penalty":5,
      "attack_goals_box":34,
      "attack_goals_outsidebox":1,
      "general_card_yellow":60,
      "general_card_red":4,
      "attack_goals_counter":4,
      "attack_goals_freekick":0,
      "defence_saves":111,
      "defence_blocks":170,
      "defence_interceptions":463,
      "defence_tackles":681,
      "defence_tackles_last_man":4,
      "defence_clearances":921,
      "defence_clearances_headed":499,
      "defence_penalty_conceeded":10,
      "attack_posession":44.1,
      "attack_pass_accuracy":74.8
   },
   {
      "Team":"Cardiff",
      "category":"Relegated",
      "general_league_position":18,
      "finance _live_games_televised":12,
      "finance _tv_revenue":102704107,
      "general_matches_played":38,
      "general_won":10,
      "general_draw":4,
      "general_lost":24,
      "attack_scored":34,
      "defence_goals_conceeded":69,
      "general_goal_difference":-35,
      "general_points":34,
      "general_squad_size":25,
      "general_squad_average_age":29.7,
      "general_squad_foreigners":10,
      "finance_team_market":152020000,
      "finance_market_average":6080800,
      "attack_passes":10226,
      "attack_passes_through":39,
      "attack_passes_long":2.513,
      "attack_passes_back":1.418,
      "attack_crosses":562,
      "attack_corners_taken":168,
      "attack_shots":417,
      "attack_shots_on_target":126,
      "attack_goals_headed":4,
      "attack_goals_penalty":3,
      "attack_goals_box":29,
      "attack_goals_outsidebox":5,
      "general_card_yellow":66,
      "general_card_red":1,
      "attack_goals_counter":0,
      "attack_goals_freekick":0,
      "defence_saves":141,
      "defence_blocks":147,
      "defence_interceptions":528,
      "defence_tackles":655,
      "defence_tackles_last_man":4,
      "defence_clearances":978,
      "defence_clearances_headed":448,
      "defence_penalty_conceeded":8,
      "attack_posession":39.1,
      "attack_pass_accuracy":63.9
   },
   {
      "Team":"Fulham",
      "category":"Relegated",
      "general_league_position":19,
      "finance _live_games_televised":13,
      "finance _tv_revenue":101904692,
      "general_matches_played":38,
      "general_won":7,
      "general_draw":5,
      "general_lost":26,
      "attack_scored":34,
      "defence_goals_conceeded":81,
      "general_goal_difference":-47,
      "general_points":26,
      "general_squad_size":25,
      "general_squad_average_age":26.7,
      "general_squad_foreigners":18,
      "finance_team_market":106920000,
      "finance_market_average":4276800,
      "attack_passes":17699,
      "attack_passes_through":33,
      "attack_passes_long":2.417,
      "attack_passes_back":2.750,
      "attack_crosses":611,
      "attack_corners_taken":161,
      "attack_shots":454,
      "attack_shots_on_target":146,
      "attack_goals_headed":7,
      "attack_goals_penalty":2,
      "attack_goals_box":30,
      "attack_goals_outsidebox":4,
      "general_card_yellow":68,
      "general_card_red":2,
      "attack_goals_counter":2,
      "attack_goals_freekick":0,
      "defence_saves":147,
      "defence_blocks":144,
      "defence_interceptions":433,
      "defence_tackles":591,
      "defence_tackles_last_man":0,
      "defence_clearances":971,
      "defence_clearances_headed":443,
      "defence_penalty_conceeded":7,
      "attack_posession":49.2,
      "attack_pass_accuracy":80.3
   },
   {
      "Team":"Huddersfield",
      "category":"Relegated",
      "general_league_position":20,
      "finance _live_games_televised":10,
      "finance _tv_revenue":96628865,
      "general_matches_played":38,
      "general_won":3,
      "general_draw":7,
      "general_lost":28,
      "attack_scored":22,
      "defence_goals_conceeded":76,
      "general_goal_difference":-54,
      "general_points":16,
      "general_squad_size":28,
      "general_squad_average_age":28.5,
      "general_squad_foreigners":27,
      "finance_team_market":85492000,
      "finance_market_average":3053600,
      "attack_passes":15902,
      "attack_passes_through":23,
      "attack_passes_long":2.603,
      "attack_passes_back":2.492,
      "attack_crosses":769,
      "attack_corners_taken":162,
      "attack_shots":400,
      "attack_shots_on_target":118,
      "attack_goals_headed":8,
      "attack_goals_penalty":1,
      "attack_goals_box":17,
      "attack_goals_outsidebox":5,
      "general_card_yellow":55,
      "general_card_red":4,
      "attack_goals_counter":1,
      "attack_goals_freekick":1,
      "defence_saves":114,
      "defence_blocks":130,
      "defence_interceptions":530,
      "defence_tackles":710,
      "defence_tackles_last_man":2,
      "defence_clearances":658,
      "defence_clearances_headed":246,
      "defence_penalty_conceeded":8,
      "attack_posession":47.1,
      "attack_pass_accuracy":75.8
   }]
   var maxValues={
      golovi:95,
      dodavanja:26581,
      lopteuprostor:146,
      ubacivanjau16:814,
      korneri:298,
      sutevi:683,
      suteviuokvir:260,
      goloviunutar16:84
   }
   var sumGolovi = 0;
   var sumDodavanja = 0
   var sumLopteUProstor=0
   var sumUbacivanjaU16 =0
   var sumKorneri =0;
   var sumSutevi = 0;
   var sumSuteviUOkvir =0
   var sumGoloviUnutar16 =0

   for(let i = 0; i<20; i++){
      sumGolovi += data[i].attack_scored
      sumDodavanja += data[i].attack_passes
      sumLopteUProstor += data[i].attack_passes_through
      sumUbacivanjaU16 += data[i].attack_crosses
      sumKorneri += data[i].attack_corners_taken
      sumSutevi += data[i].attack_shots
      sumSuteviUOkvir += data[i].attack_shots_on_target
      sumGoloviUnutar16 += data[i].attack_goals_box
   }
   var prosjek = [];
   prosjek.push({axis: "Golovi", value:sumGolovi/20/maxValues.golovi});
   prosjek.push({axis: "Dodavanja", value:sumDodavanja/20/maxValues.dodavanja});
   prosjek.push({axis: "Lopte u prostor", value:sumLopteUProstor/20/maxValues.lopteuprostor});
   prosjek.push({axis: "Ubacivanja u 16", value:sumUbacivanjaU16/20/maxValues.ubacivanjau16});
   prosjek.push({axis: "Korneri", value:sumKorneri/20/maxValues.korneri});
   prosjek.push({axis: "Šutevi", value:sumSutevi/20/maxValues.sutevi});
   prosjek.push({axis: "Šutevi u okvir", value:sumSuteviUOkvir/20/maxValues.suteviuokvir});
   prosjek.push({axis: "Golovi unutar 16", value:sumGoloviUnutar16/20/maxValues.goloviunutar16});
  var colorscale = d3.scale.category10();
  //Data
 for(let i=0; i<20; i++){
   window['klub'+i] = [];
   window['klub'+i].push(prosjek)
   let tempArray = [];
   tempArray.push({axis: "Golovi", value:data[i].attack_scored/maxValues.golovi});
   tempArray.push({axis: "Dodavanja", value:data[i].attack_passes/maxValues.dodavanja});
   tempArray.push({axis: "Lopte u prostor", value:data[i].attack_passes_through/maxValues.lopteuprostor});
   tempArray.push({axis: "Ubacivanja u 16", value:data[i].attack_crosses/maxValues.ubacivanjau16});
   tempArray.push({axis: "Korneri", value:data[i].attack_corners_taken/maxValues.korneri});
   tempArray.push({axis: "Šutevi", value:data[i].attack_shots/maxValues.sutevi});
   tempArray.push({axis: "Šutevi u okvir", value:data[i].attack_shots_on_target/maxValues.suteviuokvir});
   tempArray.push({axis: "Golovi unutar 16", value:data[i].attack_goals_box/maxValues.goloviunutar16});
   window['klub'+i].push(tempArray)
 }
   //defanzivno
   //1-value zato sto kubove s malim brojem primljenih golova treba siroko
   //prikazati na grafu
   var defMaxValues={
      primljenigolovi:81,
      zutikartoni:77,
      crvenikartoni:5,
      obrane:148,
      defanzivniblokovi:222,
      presječenelopte:528,
      uklizavanja:730,
      izbijenelopte:1120
   }
   var sumPrimljeniGolovi = 0;
   var sumZutiKartoni = 0
   var sumCrveniKartoni=0
   var sumObrane =0
   var sumDefanzivniBlokovi =0;
   var sumPresjeceneLopte = 0;
   var sumUklizavanja =0
   var sumIzbijeneLopte =0

   for(let i = 0; i<20; i++){
      sumPrimljeniGolovi += data[i].defence_goals_conceeded
      sumZutiKartoni += data[i].general_card_yellow
      sumCrveniKartoni += data[i].general_card_red
      sumObrane += data[i].defence_saves
      sumDefanzivniBlokovi += data[i].defence_blocks
      sumPresjeceneLopte += data[i].defence_interceptions
      sumUklizavanja += data[i].defence_tackles
      sumIzbijeneLopte += data[i].defence_clearances
   }
   var defprosjek = [];
   defprosjek.push({axis: "Primljeni golovi", value:sumPrimljeniGolovi/20/defMaxValues.primljenigolovi});
   defprosjek.push({axis: "Žuti kartoni", value:sumZutiKartoni/20/defMaxValues.zutikartoni});
   defprosjek.push({axis: "Crveni kartoni", value:sumCrveniKartoni/20/defMaxValues.crvenikartoni});
   defprosjek.push({axis: "Obrane", value:sumObrane/20/defMaxValues.obrane});
   defprosjek.push({axis: "Defanzivni blokovi", value:sumDefanzivniBlokovi/20/defMaxValues.defanzivniblokovi});
   defprosjek.push({axis: "Presječene lopte", value:sumPresjeceneLopte/20/defMaxValues.presječenelopte});
   defprosjek.push({axis: "Uklizavanja", value:sumUklizavanja/20/defMaxValues.uklizavanja});
   defprosjek.push({axis: "Izbijene lopte", value:sumIzbijeneLopte/20/defMaxValues.izbijenelopte});
   for(let i=0; i<20; i++){
      window['defklub'+i] = [];
      window['defklub'+i].push(defprosjek)
      let tempArray = [];
      tempArray.push({axis: "Primljeni golovi", value:data[i].defence_goals_conceeded/defMaxValues.primljenigolovi});
      tempArray.push({axis: "Žuti kartoni", value:data[i].general_card_yellow/defMaxValues.zutikartoni});
      tempArray.push({axis: "Crveni kartoni", value:data[i].general_card_red/defMaxValues.crvenikartoni});
      tempArray.push({axis: "Obrane", value:data[i].defence_saves/defMaxValues.obrane});
      tempArray.push({axis: "Defanzivni blokovi", value:data[i].defence_blocks/defMaxValues.defanzivniblokovi});
      tempArray.push({axis: "Presječene lopte", value:data[i].defence_interceptions/defMaxValues.presječenelopte});
      tempArray.push({axis: "Uklizavanja", value:data[i].defence_tackles/defMaxValues.uklizavanja});
      tempArray.push({axis: "Izbijene lopte", value:data[i].defence_clearances/defMaxValues.izbijenelopte});
      window['defklub'+i].push(tempArray)
    }
  //Options for the Radar chart, other than default
  var mycfg = {
    w: w,
    h: h,
    maxValue: 0.6,
    levels: 6,
    ExtraWidthX: 300
  }
  
  //Call function to draw the Radar chart
  //Will expect that data is in %'s
  //Legend titles
  setGraph("first","Manchester City")
  setGraph("second","Manchester City")
   $('#clubFirst').on('change', function() {
      setGraph("first",this.value)
   });
   
   $('#clubSecond').on('change', function() {
      setGraph("second",this.value)
   });
 
function setGraph(graphContainer,graphData){

   switch(graphData){
      case "Manchester City" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub0, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub0, mycfg);
            createLegend()
         }
         
       break;
      }
      case "Liverpool" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub1, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub1, mycfg);
            createLegend()
         }
         
       break;
      }
      case "Chelsea" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub2, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub2, mycfg);
            createLegend()
         }
       break;
      }
      case "Tottenham" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub3, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub3, mycfg);
            createLegend()
         }
       break;
      }
      case "Arsenal" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub4, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub4, mycfg);
            createLegend()
         }
       break;
      }
      case "Manchester United" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub5, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub5, mycfg);
            createLegend()
         }
       break;
      }
      case "Wolverhampton" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub6, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub6, mycfg);
            createLegend()
         }
       break;
      }
      case "Everton" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub7, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub7, mycfg);
            createLegend()
         }
       break;
      }
      case "Leicester" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub8, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub8, mycfg);
            createLegend()
         }
       break;
      }
      case "West Ham" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub9, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub9, mycfg);
            createLegend()
         }
       break;
      }
      case "Watford" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub10, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub10, mycfg);
            createLegend()
         }
       break;
      }
      case "Crystal Palace" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub11, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub11, mycfg);
            createLegend()
         }
       break;
      }
      case "Newcastle" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub12, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub12, mycfg);
            createLegend()
         }
       break;
      }
      case "Bournemouth" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub13, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub13, mycfg);
            createLegend()
         }
       break;
      }
      case "Burnley" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub14, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub14, mycfg);
            createLegend()
         }
       break;
      }
      case "Southampton" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub15, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub15, mycfg);
            createLegend()
         }
       break;
      }
      case "Brighton" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub16, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub16, mycfg);
            createLegend()
         }
       break;
      }
      case "Cardiff" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub17, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub17, mycfg);
            createLegend()
         }
       break;
      }
      case "Fulham" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub18, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub18, mycfg);
            createLegend()
         }
       break;
      }
      case "Huddersfield" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", klub19, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defklub19, mycfg);
            createLegend()
         }
       break;
      }
   }
   
}
  ////////////////////////////////////////////
  /////////// Initiate legend ////////////////
  ////////////////////////////////////////////
  function createLegend(){
   var legends = d3.selectAll("#svglegend").remove()

   console.log("LEGEND")
   var LegendOptions = ['Prosjek','Klub'];
   var svg = d3.selectAll('#chartbody')
   .selectAll('svg')
   .append('svg')
   .attr("id","svglegend")
   .attr("width", w+300)
   .attr("height", h)

//Create the title for the legend

       
//Initiate Legend	
var legend = svg.append("g")
   .attr("class", "legend")
   .attr("height", 100)
   .attr("width", 200)
   .attr('transform', 'translate(90,20)');
   //Create colour squares
   legend.selectAll('rect')
     .data(LegendOptions)
     .enter()
     .append("rect")
     .attr("x", w - 65)
     .attr("y", function(d, i){ return i * 20;})
     .attr("width", 10)
     .attr("height", 10)
     .style("fill", function(d, i){ return colorscale(i);});
   //Create text next to squares
   legend.selectAll('text')
     .data(LegendOptions)
     .enter()
     .append("text")
     .attr("x", w - 52)
     .attr("y", function(d, i){ return i * 20 + 9;})
     .attr("font-size", "11px")
     .attr("fill", "#737373")
     .text(function(d) { return d; });	
  }
  
        