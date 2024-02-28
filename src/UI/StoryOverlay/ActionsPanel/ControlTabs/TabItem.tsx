import Roact from "@rbxts/roact";
import { useTheme } from "Hooks/Reflex/Use/Theme";
import { Detector } from "UI/Styles/Detector";
import Corner from "UI/Styles/Corner";
import Padding from "UI/Styles/Padding";
import Text from "UI/Styles/Text";
import { useToggler } from "Hooks/Utils/Toggler";

interface TabItemProps {
	TabName: string;
	Active: boolean;
	Order?: number;
	OnClicked: () => void;
}

function setProps(props: TabItemProps) {
	return props as Required<TabItemProps>;
}

function TabItem(setprops: TabItemProps) {
	const props = setProps(setprops);
	const theme = useTheme();
	const [hover, hoverApi] = useToggler(false);

	return (
		<frame
			AutomaticSize={Enum.AutomaticSize.X}
			BackgroundColor3={props.Active ? theme.ActionsPanel.Color : theme.ActionsPanel.TabHover}
			BackgroundTransparency={props.Active || hover ? 0 : 1}
			BorderSizePixel={0}
			LayoutOrder={props.Order ?? 0}
			Size={new UDim2(0, 0, 1, -1)}
		>
			<Text
				Text={props.TabName}
				Weight={"ExtraLight"}
				TextSize={12}
				TextColor3={props.Active ? theme.Text.Color : theme.Text.Disabled}
				AutomaticSize={Enum.AutomaticSize.X}
				Size={UDim2.fromScale(0, 1)}
				ZIndex={2}
			>
				<Padding PaddingX={10} />
			</Text>
			<Corner Radius={4} />
			<Detector
				Event={{
					MouseEnter: hoverApi.enable,
					MouseLeave: hoverApi.disable,
					MouseButton1Click: props.OnClicked,
				}}
			/>
			<frame
				Key={"Cover"}
				BackgroundColor3={props.Active ? theme.ActionsPanel.Color : theme.ActionsPanel.TabHover}
				BackgroundTransparency={props.Active || hover ? 0 : 1}
				BorderSizePixel={0}
				Position={UDim2.fromScale(0, 0.5)}
				Size={UDim2.fromScale(1, 0.5)}
			/>
		</frame>
	);
}

export default TabItem;
