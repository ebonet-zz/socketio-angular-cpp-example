# Socket.IO C++ small example

Based on this and that

# Server

1. Install dependencies via npm instal
2. Run with node main.js

# Web client

After running main.js, open your web browser and navigate to `localhost:3000`

# C++ client

1. Compile dependencies following the steps in (www.hotmail.com)[Link Here!]
2. Copy the build/* to the socket folder
3. Compile the binary using (adapt the path accordingly)

`g++ -Wall -g -std=c++0x -o client app.cpp -I../socket/include/ -I/usr/include/boost socket/lib/Release/libsioclient.a -lboost_system -lboost_thread -lpthread`

4. Run the client executable and start typing!
