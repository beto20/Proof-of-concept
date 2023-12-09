package org.alberto;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        // Transactions with arrays string
        String[] genesisArrTrx = {"Alberto", "Juan", "10btc"};
        String[] arrTrx1 = {"Alberto", "Pedro", "5btc"};
        String[] arrTrx2 = {"Pedro", "Luisa", "2btc"};

        // Blocks
        Block genesisBlock = new Block(0, genesisArrTrx);
        Block block1 = new Block(genesisBlock.getBlockHash(), arrTrx1);
        Block block2 = new Block(block1.getBlockHash(), arrTrx2);

        System.out.println("Genesis: " + genesisBlock.getBlockHash());
        System.out.println("Block1: " + block1.getBlockHash());
        System.out.println("Block2: " + block2.getBlockHash());

        /********************/

        // Transactions with class
        var genesisObjTrx = new Transaction("Alberto", "Pedro", 1L);
        var objTrx1 = new Transaction("Pedro", "Maria", 2L);
        var objTrx2 = new Transaction("Alberto", "Juan", 3L);

        // Hash for genesis block
        Object[] genesisObjHash = {genesisObjTrx, 0};

        // Blocks
        var genesisObjBlock = new Block(0, genesisObjTrx, Arrays.hashCode(genesisObjHash));

        Object[] objHash1 = {objTrx1, genesisObjBlock};
        var objBlock1 = new Block(genesisObjBlock.hashCode(), objTrx1, Arrays.hashCode(objHash1));

        Object[] objHash2 = {objTrx2, objBlock1.hashCode()};
        var objBlock2 = new Block(objBlock1.hashCode(), objTrx2, Arrays.hashCode(objHash2));

        System.out.println("ObjGenesis: " + genesisObjBlock.getBlockHash());
        System.out.println("ObjBlock1: " + objBlock1.getBlockHash());
        System.out.println("ObjBlock2: " + objBlock2.getBlockHash());
    }
}