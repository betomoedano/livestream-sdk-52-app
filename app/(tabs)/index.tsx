import { Message, useChat } from "@ai-sdk/react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { fetch as expoFetch } from "expo/fetch";
import { View, TextInput, Text, SafeAreaView, FlatList } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const MessageComponent = ({ message }: { message: Message }) => {
  return (
    <View
      style={{
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
        padding: 8,
        borderRadius: 8,
        marginHorizontal: 16,
      }}
    >
      <Text style={{ fontWeight: 700 }}>{message.role}</Text>
      {message.toolInvocations ? (
        <Text>{JSON.stringify(message.toolInvocations, null, 2)}</Text>
      ) : (
        <Text>{message.content}</Text>
      )}
    </View>
  );
};

export default function App() {
  const { messages, error, handleInputChange, input, handleSubmit } = useChat({
    fetch: expoFetch as unknown as typeof globalThis.fetch,
    api: "http://localhost:8081/api/chat",
    onError: (error) => console.error(error, "ERROR"),
  });
  const bottomTabBarHeight = useBottomTabBarHeight();

  if (error) return <Text>{error.message}</Text>;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        bottomOffset={bottomTabBarHeight}
        contentContainerStyle={{ flex: 1 }}
      >
        <FlatList
          data={messages}
          contentContainerStyle={{ gap: 8 }}
          // style={{ flex: 1, borderWidth: 1, borderColor: "red" }}
          renderItem={({ item }) => <MessageComponent message={item} />}
        />
        <View
          style={{
            height: 50,
            borderWidth: 1,
            borderColor: "red",
            marginBottom: bottomTabBarHeight,
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              padding: 8,
            }}
            placeholder="Say something..."
            value={input}
            onChange={(e) =>
              handleInputChange({
                ...e,
                target: {
                  ...e.target,
                  value: e.nativeEvent.text,
                },
              } as unknown as React.ChangeEvent<HTMLInputElement>)
            }
            onSubmitEditing={(e) => {
              handleSubmit(e);
              e.preventDefault();
            }}
            autoFocus={true}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
