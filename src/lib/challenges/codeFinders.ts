export const findAllTextComponents = (code: string) => {
  return code.match(/<Text.*?>[\s?\S]*?<\/Text>/gm) ?? [];
};

export const findAllListComponents = (code: string) => {
  return code.match(/<FlatList[\s\S]*?\/>/gm) ?? [];
};

export const findAllButtonComponents = (code: string) => {
  return (
    code.match(/<TouchableOpacity[\s\S]*?>[\s?\S]*?<\/TouchableOpacity>/gm) ??
    []
  );
};

export const findAllIconComponents = (code: string) => {
  return code.match(/<AntDesign[\s\S]*?\/>/gm) ?? [];
};

export const findAllTextInputs = (code: string) => {
  return code.match(/<TextInput[\s\S]*?\/>/gm) ?? [];
};

export const findTouchableOpacityOpeningTag = (code: string) => {
  // Making sure the final > isn't preceded by a = so that any arrow functions don't catch us out here
  // e.g., the > in onPress{()=>{}} will ignored
  const touchableOpacityTag = code.match(/<TouchableOpacity[\s\S]*?[^=]>/gm);
  return touchableOpacityTag ? touchableOpacityTag[0] : undefined;
};
