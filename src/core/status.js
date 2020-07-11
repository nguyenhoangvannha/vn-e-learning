const idle = (message) => {
    return {
        loadStatus: LoadStatus.idle,
        message: message ?? '',
        data: undefined,
    }
}

const loading = (message) => {
    return {
        loadStatus: LoadStatus.loading,
        message: message ?? '',
        data: undefined,
    }
}

const success = (message) => {
    return {
        loadStatus: LoadStatus.success,
        message: message ?? '',
        data: undefined,
    }
}

const error = (message) => {
    return {
        loadStatus: LoadStatus.error,
        message: message ?? '',
        data: undefined,
    }
}

const completed = (message) => {
    return {
        loadStatus: LoadStatus.completed,
        message: message ?? '',
        data: undefined,
    }
}

export const Status = {
    idle: idle,
    loading: loading,
    success: success,
    error: error,
    completed: completed,
}

export const LoadStatus = {
    idle,
    loading,
    success,
    error,
    completed,
}