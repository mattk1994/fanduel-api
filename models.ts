import {CookieJar, Headers} from "request";

export class FanduelConfig {
    private _username : string;
    private _password : string;

    get username(): string {
        return this._username;
    }

    get password(): string {
        return this._password;
    }
}

export interface IDefaultOptions {
    followRedirect : boolean;
    followAllRedirects : boolean;
    jar : CookieJar;
    headers : Headers;
}

export class UserInfo {
    id: string;
    username : string;
    apiClientId : string;
}

class Linked {
    _url : string;
}

export class SlateStatus {
    final : boolean;
    started : boolean;
}

export class SlateContestType {
    _members : string[];
    count : number;
    _ref : string;
}

export class SlateContest  {
    pinned_count : number;
    _url : string;
    contest_types : SlateContestType[];
}

export class Slate {
    start_date : string;
    id : string;
    late_swap : boolean;
    salary_cap : number;
    label : string;
    sport : string;
    _url : string;
    status : SlateStatus;
    contests : SlateContest;
    players : Linked;
}

export class SlateDetails {
    label : string;
    sport : string;
    contests : SlateDetailsContests;
    players : Linked;
    h2h_buyins : H2HBuyin[];
    roster_positions : RosterPosition[];
    scoring_rules : ScoringRule;
    status : SlateStatus;
    player_positions : PlayerPosition[];
    fixtures : Fixture;
    roster_restrictions : RosterRestriction;
    _url : string;
    contest_specs : ContestSpec[];
    salary_cap : number;
    id : string;
    late_swap : boolean;
    games : SlateGame[];
}

export class SlateGameStatus {
    final : boolean;
    started : boolean;
    label : string;
    stadium_type : string;
    weather : string;
    top_bottom : string;
}

export class SlateGameTeam {
    team : string;
    sport_specific : any;
    score : string;
}

export class SlateGame {
    name : string;
    sport : string;
    start_date : string;
    id : string;
    status : SlateGameStatus;
    away_team : SlateGameTeam;
    home_team : SlateGameTeam;
    weather? : SlateGameWeather;
    wind? : SlateGameWind;
}

export class SlateGameWind {
    speed : number;
    bearing : number;
}

export class Precipitation {
    time : string;
    probability : number;
    intensity : string;
}

export class SlateGameWeather {
    precipitation : Precipitation[];
}

export class ContestSpec {
    id : string;
    contest_type : string;
    prize_structures : PrizeStructure[];
    entry_fees : EntryFee[];
    max_size : number;
    min_size : number;
}

export class EntryFee {
    entry_fee_fdp : number;
    entry_fee : number;
}

export class PrizeStructure {
    name : string;
    description : string;
    entry_fees : number[];
}

export class RosterRestriction {
    max_players : number;
    min_fixtures : number;
    min_teams : number;
    max_players_from_team : number;
    min_players : number;
    player_position_restrictions : any[];
}

export class Fixture {
    _members : string[];
    _ref : string;
}

export class H2HBuyin {
    entry_fee_fdp : number;
    prize : number;
    entry_fee : number;
}

export class SlateDetailsContests {
    open : Linked;
}

export class ScoringRule {
    notes : string[];
    groups : ScoringRuleGroup;
}

export class ScoringRuleGroup {
    name : string;
    rules : ScoringRuleGroupRule[];
}

export class ScoringRuleGroupRule {
    abbr : string;
    points : number;
    full : string;
}

export class PlayerPosition {
    abbr : string;
    full : string;
}

export class RosterPosition {
    abbr : string;
    full : string;
    valid_player_positions : string[];
}