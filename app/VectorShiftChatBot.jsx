
'use client'

const VectorShiftChatBot = () => {
    return (
        <div style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: 1000 }}>
            <iframe
                src="https://app.vectorshift.ai/chatbots/embedded/661f270a01e6b261a8477a1f?openChatbot=true"
                width="500px"
                height="500px"
                style={{ border: 'none' }}
                allow="clipboard-read; clipboard-write"
                title="VectorShift Chatbot"
            />
        </div>
    );
};

export default VectorShiftChatBot;