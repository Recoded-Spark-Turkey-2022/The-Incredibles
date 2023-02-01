import { useState } from 'react';
import Chat from '../../components/Chat';
import ChatSidebar from '../../components/ChatSidebar';
import Container from '../../components/UI/Containerp0';

function ChatsPage() {
  const [open, setOpen] = useState(true);
  return (
    <Container>
      <div className="">
        <div className="w-4/5 h-full mt-4 mx-auto relative shadow-xl border max-md:w-full  max-md: rounded-xl  overflow-hidden flex">
          <ChatSidebar open={open} setOpen={setOpen} />
          <Chat open={open} setOpen={setOpen} />
        </div>
      </div>
    </Container>
  );
}

export default ChatsPage;
