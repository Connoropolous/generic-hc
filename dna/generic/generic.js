function genesis() {
  return true
}

function hCommitLinks(input) {
  return commit("genericLink", {
    Links: input
  })
}

function hCommit(input) {
  return commit("generic", {
    content: input
  })
}

function hPrivateCommit(input) {
  return commit("privateGeneric", {
    content: input
  })
}

function hUpdate(input) {
  return update("generic", {
    content: input.content
  }, input.hash)
}

function hPrivateUpdate(input) {
  return update("privateGeneric", {
    content: input.content
  }, input.hash)
}

function hRemove(hash) {
  return remove(hash, "")
}

function hGet(input) {
  if (input.options) {
    return get(input.hash, input.options)
  } else {
    return get(input.hash)
  }
}

function hGetLinks(input) {
  if (input.options) {
    return getLinks(input.base, input.tag, input.options)
  } else {
    return getLinks(input.base, input.tag || "")
  }
}

function hQuery(options) {
  return query(options)
}

function hMakeHash(input) {
  return makeHash(input.type, input.data)
}

function validateCommit() {
  return true
}

function validatePut() {
  return true
}

function validateMod() {
  return true
}

function validateDel () {
  return true
}

function validateLink() {
  return true
}

function validatePutPkg() {
  return null
}

function validateModPkg () {
  return null
}

function validateDelPkg () {
  return null
}

function validateLinkPkg () {
  return null
}