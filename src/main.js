import "drag-drop-touch";
import "./shims";
import "./merge-globals";
import { browserCheck, initLaunch } from "./game";
import { DEV } from "./env";
import { watchLatestCommit } from "./commit-watcher";

if (browserCheck()) initLaunch();
if (DEV) watchLatestCommit();
