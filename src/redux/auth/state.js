import { AuthAction } from "./actions"
import { Status } from "../../core/status";

const DoLoginAuthAction = AuthAction.DoLoginAuthAction;
const DoRegisterAuthAction = AuthAction.DoRegisterAuthAction;

const authState = {
    token: '',
    userInfo: undefined,
    status: {
        DoLoginAuthAction: Status.idle(),
        DoRegisterAuthAction: Status.idle(),
    }
}

export { authState }