# chatbot_script.py
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

# Create a chatbot instance
chatbot = ChatBot('PsychBot')

# Create a new trainer for the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)

# Train the chatbot on English language data
trainer.train('chatterbot.corpus.english')

# Function to get a response from the chatbot
def get_bot_response(user_input):
    response = chatbot.get_response(user_input)
    return str(response)

if __name__ == "__main__":
    print("Chatbot is ready!")
