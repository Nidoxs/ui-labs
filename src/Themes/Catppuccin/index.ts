import { Frappe, Latte, Macchiato, Mocha } from "@rbxts/catppuccin";
import { Darken } from "@rbxts/colour-utils";

type CatppuchinePalette = typeof Frappe;

Color3.fromRGB(26, 28, 33);

function CatppuchineTheme(palette: CatppuchinePalette) {
	const theme: Theme = {
		PureColor: {
			Color: new Color3(1, 1, 1),
			Inverse: palette.Base,
		},
		Text: {
			Color: palette.Text,
			Disabled: palette.Overlay0,
			Inverted: palette.Crust,
		},
		ResizePanelDrag: Color3.fromRGB(56, 165, 255),
		Icon: {
			Color: palette.Text,
			Active: palette.Sapphire,
			Disabled: palette.Subtext0,
		},
		Divisor: {
			Color: palette.Subtext1,
			Transparency: 0.7,
		},
		Topbar: {
			Color: palette.Crust,
			Logo: palette.Mauve,
		},
		Search: {
			Color: palette.Surface0,
			Placeholder: palette.Overlay2,
		},
		SidePanel: palette.Mantle,
		StoryPanel: {
			Color: palette.Base,
			PatternColor: palette.Lavender,
			PatternTransparency: 0.95,
		},
		ActionsPanel: {
			Color: palette.Base,
			TabsBackground: palette.Crust,
			TabHover: palette.Mantle,
		},
		StoryPreview: {
			Background: palette.Base,
			Color: palette.Surface1,
			Selected: palette.Sapphire,
			TextSelected: palette.Crust,
			CloseButton: palette.Red,
			InfoToast: palette.Mantle,
		},
		//NODES

		Normal: {
			Color: palette.Surface0,
			StoryIcon: palette.Sapphire,
			FolderIcon: palette.Pink,
			Book: palette.Green,
		},
		StorySelected: {
			Color: palette.Sapphire,
			StoryIcon: palette.Crust,
		},

		Dropdown: {
			Color: palette.Crust,
			TextHover: palette.Base,
		},
		ColorPicker: {
			Background: palette.Base,
			Handle: Color3.fromRGB(255, 255, 255),
		},
		//CONTROLS
		Boolean: {
			SwitchBackOn: palette.Surface1,
			SwitchBackOff: palette.Surface1,
			SwitchOff: palette.Base,
			SwitchOn: palette.Green,
		},
		List: {
			Frame: palette.Crust,
			FrameHovered: palette.Surface0,
		},
	};
	return theme;
}

export const CatppuchineLatte = CatppuchineTheme(Latte);
export const CatppuchineFrappe = CatppuchineTheme(Frappe);
export const CatppuchineMacchiato = CatppuchineTheme(Macchiato);
export const CatppuchineMocha = CatppuchineTheme(Mocha);
