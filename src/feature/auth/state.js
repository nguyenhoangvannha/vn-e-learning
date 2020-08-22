import { AuthAction, DO_REGISTER_AUTH_ACTION } from "./actions"
import { Status } from "../../core/status";

const DoLoginAuthAction = AuthAction.DoLoginAuthAction;
const DoLogoutAuthAction = AuthAction.DoLogoutAuthAction;
const authState = () => {
    
    return {
        token: '',
        userInfo: undefined,
        status: {
            DoLoginAuthAction: Status.idle(),
            DO_REGISTER_AUTH_ACTION: Status.idle(),
            DoLogoutAuthAction: Status.idle(),
        }
    }
}

export { authState }