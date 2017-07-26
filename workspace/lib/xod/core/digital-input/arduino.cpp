struct State {
    int configuredPort = -1;
};

{{ GENERATED_CODE }}

void evaluate(NodeId nid) {
    if (!isInputDirty<Inputs::UPD>(nid))
        return;

    State* state = getState(nid);
    const int port = (int)getValue<Inputs::PORT>(nid);
    if (port != state->configuredPort) {
        ::pinMode(port, INPUT);
        // Store configured port so to avoid repeating `pinMode` on
        // subsequent requests
        state->configuredPort = port;
    }

    emitValue<Outputs::SIG>(nid, ::digitalRead(port));
}
