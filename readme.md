# Socket.IO C++ small example

Based on this and that

# Server

1. Install dependencies via npm instal
2. Run with node main.js

# Web client

After running main.js, open your web browser and navigate to `localhost:3000`

# C++ client

1. Compile dependencies following the steps in https://github.com/socketio/socket.io-client-cpp
2. Copy the build/* to the socket folder
3. Compile the binary using (adapt the path accordingly)

`g++ -Wall -g -std=c++0x app.cpp -I../socket/include/ -I/usr/local/Cellar/boost/1.60.0/include/ socket/lib/Release/libsioclient.a -o client -lboost_system -lboost_thread-mt -lpthread`

4. Run the client executable and start typing!
