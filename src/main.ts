import { GameMode } from "@/controllers";
import { $t } from "@/utils/i18n";
const app = GameMode.getInstance();
app.init(() => console.log($t("server.running")));
