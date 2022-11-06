import {RowView} from "./WidgetSection.styles";
import React from "react";
import {Text} from "react-native";
import Widget from "../Widget/Widget";
import {
  AccountsIcon,
  CardsIcon,
  UtilitiesIcon,
  HistoryIcon,
} from "../../assets/images";

export default function WidgetSection() {
  return (
    <RowView>
      <Widget
        text="Accounts"
        image={AccountsIcon}
        color="rgba(0, 201, 116, 0.15)"
      />
      <Widget text="Cards" image={CardsIcon} color="rgba(0, 173, 248, 0.15)" />
      <Widget
        text="Utilities"
        image={UtilitiesIcon}
        color="rgba(246, 167, 33, 0.15)"
      />
      <Widget
        text="History"
        image={HistoryIcon}
        color="rgba(255, 0, 46, 0.15)"
      />
    </RowView>
  );
}
