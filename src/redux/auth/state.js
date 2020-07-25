import { AuthAction } from "./actions"
import { Status } from "../../core/status";

const DoLoginAuthAction = AuthAction.DoLoginAuthAction;
const DoRegisterAuthAction = AuthAction.DoRegisterAuthAction;
const DoLogoutAuthAction = AuthAction.DoLogoutAuthAction;

const authState = () => {
    return {
        token: '',
        userInfo: undefined,
        status: {
            DoLoginAuthAction: Status.idle(),
            DoRegisterAuthAction: Status.idle(),
            DoLogoutAuthAction: Status.idle(),
        }
    }
}

export { authState }