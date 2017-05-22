import * as fs from "fs";
import {dirname} from "path";
import Fanduel from "../index";
import * as Q from "q";
import * as _ from "lodash";
import {FanduelConfig} from "../models";

const auth = JSON.parse(fs.readFileSync(dirname(__filename) + "/../auth.json", "utf8"));
const fd : Fanduel = new Fanduel(<FanduelConfig> auth);

fd.subscribeToWebsocket((data) => {

});