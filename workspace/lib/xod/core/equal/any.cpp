struct State {
};

{{ GENERATED_CODE }}

void evaluate(NodeId nid) {
    auto lhs = getValue<Inputs::LHS>(nid);
    auto rhs = getValue<Inputs::RHS>(nid);
    emitValue<Outputs::EQ>(nid, lhs == rhs);
}
