import './Content.scss';

import Conversation from './Conversation';
import SidePanel from './SidePanel';

function Content() {
  return (
    <div className="content flex">
      <Conversation />
      <SidePanel />
    </div>
  );
}

export default Content;
