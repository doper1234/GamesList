/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.doper1234.firsthtml;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.CloseReason;
import javax.websocket.EndpointConfig;
import javax.websocket.MessageHandler;
import javax.websocket.*;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author Chris
 */
@ServerEndpoint("/")
public class Endpoint {
    
    int playerNumber = 0;
    static List<Endpoint> clients = new CopyOnWriteArrayList<>();
    Session session;
    
    @OnOpen
    public void onOpen(Session session, EndpointConfig eC){
        sendGameInformation(session);
//        this.session = session;
//        clients.add(this);
//        playerNumber = clients.size();
//        try {
//            if(playerNumber > 4){
//               session.getBasicRemote().sendText("Server is full!");
//               clients.remove(this);
//                    try {
//                        session.close();
//                    } catch (IOException ex1) {
//                        ex1.printStackTrace();
//                    }
//               
//            }else{
//               session.getBasicRemote().sendText(playerNumber +"");
//               if(playerNumber == 1){
//                   session.getBasicRemote().sendText("host");
//               }
//               if(clients.size() >= 2){
//                   broadcast("start game");
//               }
//            }
//        } catch (IOException ex) {
//            
//        }
        //broadcast("someone joined");
    }
    
    @OnClose
    public void onClose(Session session, CloseReason reason){
        System.out.println("socket closed: " + reason.getReasonPhrase());
//        playerNumber--;
//        clients.clear();
    }
    
    @OnMessage
    public void onMessage(String message){
        System.out.println(message);
//        if(message.startsWith("score")){
//            saveScore(message);
//        }else if(message.startsWith("request")){
//            sendScores();
//        }else if(message.startsWith("topten")){
//            sendScoresAndDates();
//        }else if(message.startsWith("highest")){
//            sendHighestScore();
//        }else{
//            broadcast(message);
//        }
        
    }
    
    private void sendGameInformation(Session session){
        SQLGameDatabaseReader reader = new SQLGameDatabaseReader();
        String sendGameData = reader.getGamesList();
        //broadcast("gameslist " + sendGameData);
        System.out.println(sendGameData);
        try {
            session.getBasicRemote().sendText(sendGameData);
            //sendScoresAndDates();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
    
}
