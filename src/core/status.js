const idle = (message, data) => {
    return {
        loadStatus: LoadStatus.idle,
        message: message ?? '',
        data: data,
    }
}

const loading = (message, data) => {
    return {
        loadStatus: LoadStatus.loading,
        message: message ?? '',
        data: data,
    }
}

const success = (message, data) => {
    return {
        loadStatus: LoadStatus.success,
        message: message ?? '',
        data: data,
    }
}

const error = (message, data) => {
    return {
        loadStatus: LoadStatus.error,
        message: message ?? '',
        data: data,
    }
}

const completed = (message, data) => {
    return {
        loadStatus: LoadStatus.completed,
        message: message ?? '',
        data: data,
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