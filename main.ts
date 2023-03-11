import React from 'react'
// import PropTypes from 'prop-types'

const rdUser: Function = () => {

}
function Main(props) {
  return (
    rdUser(user.name)
  )
}

// Main.propTypes = {}

export default Main

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: 'new name',
    id: 0
}