var svg, xAxis, yAxis,height,firstclick=true;
var barchart, x, y, barWidth;
var choosenClub;
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
       "finance _market_average":39987200,
       "attack_passes":26.581,
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
       "finance _team_market":836440000,
       "finance _market_average":34848000,
       "attack_passes":23.638,
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
       "finance _team_market":779460000,
       "finance _market_average":29981600,
       "attack_passes":25.070,
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
       "finance _team_market":735240000,
       "finance _market_average":29409600,
       "attack_passes":21.295,
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
       "finance _team_market":701800000,
       "finance _market_average":26989600,
       "attack_passes":20.805,
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
       "finance _team_market":550440000,
       "finance _market_average":22017600,
       "attack_passes":19.202,
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
       "finance _team_market":369600000,
       "finance _market_average":16068800,
       "attack_passes":16.618,
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
       "finance _team_market":305360000,
       "finance _market_average":11748000,
       "attack_passes":16.494,
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
       "finance _team_market":284240000,
       "finance _market_average":10929600,
       "attack_passes":17.219,
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
       "finance _team_market":234212000,
       "finance _market_average":9011200,
       "attack_passes":16.358,
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
       "finance _team_market":229240000,
       "finance _market_average":9169600,
       "attack_passes":15.462,
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
       "finance _team_market":223520000,
       "finance _market_average":8280800,
       "attack_passes":15.243,
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
       "finance _team_market":214060000,
       "finance _market_average":10700800,
       "attack_passes":13.490,
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
       "defence_clearances":1.120,
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
       "finance _team_market":200288000,
       "finance _market_average":8008000,
       "attack_passes":15.943,
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
       "defence_clearances":1.019,
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
       "finance _team_market":176440000,
       "finance _market_average":6784800,
       "attack_passes":13.011,
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
       "defence_clearances":1.080,
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
       "finance _team_market":160072000,
       "finance _market_average":5720000,
       "attack_passes":14.297,
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
       "defence_clearances":1.068,
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
       "finance _team_market":152680000,
       "finance _market_average":6635200,
       "attack_passes":14.109,
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
       "finance _team_market":152020000,
       "finance _market_average":6080800,
       "attack_passes":10.226,
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
       "finance _team_market":106920000,
       "finance _market_average":4276800,
       "attack_passes":17.699,
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
       "finance _team_market":85492000,
       "finance _market_average":3053600,
       "attack_passes":15.902,
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
$( document ).ready(function() {
   createTable()
   createSVG()
   //stavljanje listenera na drugi stupac u tablici
   $(".table td:nth-child(2)").click(function() {
      
      var tableData = $(this).parent("tr").children("td").map(function() {
          return $(this).text();    
      }).get();
      //poziva se funkcija s podacima za klub koji je kliknut
      setHeader(tableData)
      setImage(tableData[1])
      createGraph(tableData)

   });
});

function createTable(){
   //dohvaća se element koji je predviđen za kreiranje tablice
   var tablewrapper = document.querySelector(".table-wrapper")
   //kreira se element table
   tbl  = document.createElement('table');
   tbl.style.width  = '100%';
   tbl.setAttribute("class","table")
   tbl.style.border = '1px solid black';
   //postavlja se što će koji podatak postavljati
   var headerPolje = ["Pozicija","Klub","Utakmice","Pobjede","Izjednačene","Porazi",
   "Gol razlika","Zabijeni golovi","Primljeni golovi","Bodovi"]
   var tr = tbl.insertRow();
   for(var j = 0; j < 10; j++){
      var th = tr.insertCell();
      th.appendChild(document.createTextNode(headerPolje[j]));
   }
   //napravljeno polje s imenima atributa koja će se iz JSON podataka prebaciti u tablicu
   var poljeStupaca=["general_league_position","Team","general_matches_played","general_won",
            "general_draw","general_lost","general_goal_difference","attack_scored",
            "defence_goals_conceeded","general_points"]
   for(var i = 0; i < data.length; i++){
      var tr = tbl.insertRow();
      for(var j = 0; j < 10; j++){
         var td = tr.insertCell();
         td.appendChild(document.createTextNode(data[i][poljeStupaca[j]]));
      }
   }
   tablewrapper.appendChild(tbl)
}
    
function setHeader(tableData){
   //postavljanje imena kluba u naslov 
   var clubName = document.createElement("h2")
   clubName.textContent= tableData[1]

   clubName.setAttribute("id","clubname")
   $("#clubname").replaceWith(clubName)

   //pozivanje funkcije za postavljanje brojčanog iznosa posjeda
   getPercent(clubName.textContent)
}

function getPercent(clubname){
   for(var i = 0; i<data.length;i++){
      if(data[i]["Team"] == clubname){
         //pronađe se predano ime i poziva se funkcija za postavljanje broja
         setPercentage(data[i]["attack_posession"])
      }
   }
}
function setPercentage(possesion){
   //dohvaća se element i postavlja se broj
   var percentage = document.querySelector("#possesionPercent")
   percentage.innerHTML="Posijed lopte:<strong> "+possesion+"%<strong>"

}
function setImage(image){
   //dohvaća se element koji je predviđen za postavljanje slike kliknutog kluba
   //postavlja se style
   var img = document.querySelector("#clubImage")
   img.setAttribute("height", "150");
   img.style.right="0"
   img.style.top="0"
   img.style.position="absolute"
   img.style.margin="15px 15px 0 0"
   //switch funkcija koja postavlja sliku na osnovu imena 
   switch(image){
      
      case "Manchester City":{
         img.setAttribute("src","./images/mnc.png")
         break;
      }
      case "Liverpool":{
         img.setAttribute("src","./images/liverpool.png")
         break;
      }
      case "Chelsea":{
         img.setAttribute("src","./images/chelsea.png")
         break;
      }
      case "Tottenham":{
         img.setAttribute("src","./images/tottenham.png")
         break;
      }
      case "Arsenal":{
         img.setAttribute("src","./images/arsenal.png")
         break;
      }
      case "Manchester United":{
         img.setAttribute("src","./images/mnu.png")
         break;
      }
      case "Wolverhampton":{
         img.setAttribute("src","./images/wolwes.png")
         break;
      }
      case "Everton":{
         img.setAttribute("src","./images/everton.png")
         break;
      }
      case "Leicester":{
         img.setAttribute("src","./images/leicester.png")
         break;
      }
      case "West Ham":{
         img.setAttribute("src","./images/westham.png")
         break;
      }
      case "Watford":{
         img.setAttribute("src","./images/watford.png")
         break;
      }
      case "Crystal Palace":{
         img.setAttribute("src","./images/crystal.png")
         break;
      }
      case "Newcastle":{
         img.setAttribute("src","./images/newcastle.png")
         break;
      }
      case "Bournemouth":{
         img.setAttribute("src","./images/bour.png")
         break;
      }
      case "Burnley":{
         img.setAttribute("src","./images/burley.png")
         break;
      }
      case "Southampton":{
         img.setAttribute("src","./images/southampton.png")
         break;
      }
      case "Brighton":{
         img.setAttribute("src","./images/brighton.png")
         break;
      }
      case "Cardiff":{
         img.setAttribute("src","./images/cardiff.png")
         break;
      }
      case "Fulham":{
         img.setAttribute("src","./images/fulham.png")
         break;
      }
      case "Huddersfield":{
         img.setAttribute("src","./images/hudd.png")
         break;
      }
   }
   
}
function createSVG(){
   //postavljanje dimenzija
   height = 500
   width = 700
   barWidth = width / data.length
   margin = { left: 50, top: 10, right: 50, bottom: 30 }
   
   //ordinalna skala može imati domenu kao skup imena ili kategorija
   x = d3.scale.ordinal()
      .domain(d3.range(data.length))
      .rangeRoundBands([0, width])

    //linearna skala u iznosu od 0 do 100 jer je to minimalni i maximalni broj koji neka ekipa može postići
    //range radi prilagodbu broja u prihvatljiv raspon
   y = d3.scale.linear()
      .domain([0,100])
      .range([height, 0])
    
   yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')

   xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom')
      //postavljanje imena klubova na x os
      .tickFormat(function(d, i) { return data[i]['Team']; });

   svg = d3.select(".clubInformation")
      .append("svg")
      //ovaj atribut nam prilagođava element uz viewBox
      .attr('preserveAspectRatio', 'xMinYMin meet')
      //sa viewboxom definiramo omjer slike pa smanjuje ili povećava duljine kako bi se uklopile u raspoloživ prostor
      .attr('viewBox','0 0 ' + (width + margin.left + margin.right) +' ' +(height + margin.top + margin.bottom))
      .style("overflow","visible")
      .style("margin-left","12%")
}

function createGraph(tableData){
   
   //brisanje cijelog sadržaja u svgu kako bi se ponovno kreirao graf za određeni klub
   svg.selectAll("*").remove();
      var bar = svg.selectAll('g')
         .data(data)
         //enter vraća spremnike za elemenete koji će se tek napraviti(g)
         .enter()
         //g element koristimo za grupiranje cijelu grupu oblika kao da je jedan
         .append('g')
         //raspoređivanje elemenata po x osi
         .attr('transform', (_, i) => 'translate(' + i * barWidth + ', 0)')

   //postavljanje x osi u svg
   svg.append('g')
      .attr('class', 'x axis')
      .call(xAxis)
      .attr('transform', 'translate(0,' + (height-100) + ')')

   //postavljanje y osi u svg
   svg.append('g')
         .attr('class', 'y axis')
         .call(yAxis)
         //naslov y osi
         .append("text")
         .attr("dx", "-10em")
         .attr("dy", "-3em")
         .style("text-anchor", "center")
         .style("font-size","larger")
         .style("transform","rotate(270deg)")
         .text("Postotak");
  
   
   //proširivanje svga s rect elementima
   bar.append('rect')
      .attr('class', 'bar')
      //stanjivanje stupaca da bi bilo ljepse
      .attr('width', barWidth - 10)
      .attr('y', function(d) { return y(0); })
      .attr('height',function(d,i) {return height - y(0); })
      //odabranom klubu stavlja se drugčija boja
      .attr("fill",  function(d,i) {
         if(tableData[1] == d.Team){
            return "rgb(89, 206, 128)" 
         }
         else
            return "#bd007e"
         })
         .on('mouseover', mouseover)
         .on('mousemove', function(d,i) {
            tooltip.html(data[i]["Team"] +'<br>' + data[i]["attack_posession"])
            .style('left', (d3.event.pageX - 34) + 'px')
            .style('top', (d3.event.pageY - 12) + 'px');
         })
         .on('mouseout', mouseout);

   
   if(firstclick == true){
      firstclick=false
      svg.selectAll("rect")
      .transition()
      .duration(800)
      .attr('y', function(d) { return y(d.attack_posession); })
      .attr('height',function(d,i) {return height - y(d.attack_posession); })
      //svaki stupac krece nakon 100ms
      .delay(function(d,i){ return(i*100)})
   }
   else{
      svg.selectAll("rect")
      .attr('y', function(d) { return y(d.attack_posession); })
      .attr('height',function(d,i) {return height - y(d.attack_posession); })
   }
   

      //postavljanje naslova grafa
   svg.append("text")
         .attr("x", (width / 2))             
         .attr("y", - 100)
         .attr("text-anchor", "middle")  
         .style("font-size", "20px") 
         .style("text-decoration", "underline")  
         .text("Posijed lopte u sezoni 2018/2019");
}
var tooltip = d3.select('.container-fluid').append('div')
         .attr('class', 'tooltip')
         .style('display', 'none');
function mouseover(){
   tooltip.style('display', 'inline');
}
function mouseout(){
   tooltip.style('display', 'none');
}