import { useLocation } from 'react-router-dom'

import Message from '../../layout/message/Message';

function Project(){

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  return (
    <div>
      <h1>My Projects</h1>
      {message && <Message type="success" msg={message} />}
    </div>
  );
}

export default Project;