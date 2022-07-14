const deniedMessage = {
  message: "Access Denied",
  err: null
}

const allowMessage = {
  status: true,
  message: "granted"
}

const admin = async (req) => {
  const role = req.userData.role
  if (role !== "admin") {
    return ({
      status: false,
      message: deniedMessage
    })
  }
  return (allowMessage)
}

const kasir = async (req) => {
  const role = req.userData.role
  if (role !== "kasir") {
    return ({
      status: false,
      message: deniedMessage
    })
  }
  return (allowMessage)
}

const adminKasir = async (req) => {
  const role = req.userData.role
  if (role === "admin" || role === "kasir") {
    return (allowMessage)
  }
  return ({
    status: false,
    message: deniedMessage
  })
}

const adminOwner = async (req) => {
  const role = req.userData.role
  if (role === "admin" || role === "owner") {
    return (allowMessage)
  }
  return ({
    status: false,
    message: deniedMessage
  })
}

module.exports = {
  admin,
  kasir,
  adminKasir,
  adminOwner
}