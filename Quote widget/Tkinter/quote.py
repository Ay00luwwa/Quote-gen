import tkinter as tk
import random

# List of quotes
quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
]

# Function to display a random quote
def show_random_quote():
    random_quote = random.choice(quotes)
    quote_label.config(text=random_quote)

# Create the main application window
app = tk.Tk()
app.title("Random Quote Generator")
app.geometry("400x200")

# Create and place a label to display quotes
quote_label = tk.Label(app, text="", wraplength=300)
quote_label.pack(pady=20)

# Create a button to show a random quote
show_button = tk.Button(app, text="Show Random Quote", command=show_random_quote)
show_button.pack()

# Start the application's main loop
app.mainloop()
