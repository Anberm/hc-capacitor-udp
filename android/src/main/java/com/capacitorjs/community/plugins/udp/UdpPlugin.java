package com.capacitorjs.community.plugins.udp;

import android.util.Log;

public class UdpPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
