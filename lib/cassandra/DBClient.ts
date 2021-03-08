import { Client } from "cassandra-driver";

export const client = new Client({
  cloud: {
    secureConnectBundle: "./secure-connect-new-vt-agenda.zip",
  },

  credentials: {
    username: "RootAdmin",
    password: "RootPassword",
  },
  keyspace: "New_VT_Agenda",
});
