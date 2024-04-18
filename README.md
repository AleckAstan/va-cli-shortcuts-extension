# va-cli-shortcuts 

This is a simple extensions to prevent the mimic of opening terminal, navigating in folders and execute va-cli command.

## How to install?
- open extensions tab in vscode
- go into menu ...
- import from vsix
- select the downloaded last release vsix version

![](https://github.com/AleckAstan/va-cli-shortcuts-extension/blob/master/installation.gif)
## Features



> generate api call

## Requirements

run it inside folder containing va-cli(*for menu context*), otherwise, this extensions have no purpose

snippets doesn't have requirement 

## Known Issues

sometime the menu is not showing if you don't right click on file inside the folder first.

## Release Notes


### 1.1.0(2024-04-18)
**VA-Tools snippets inside react components** (*.tsx file*)

#### COMMAND LIST
-  ue : generating useEffect. Because... why not!
```typescript
    useEffect(() => {
	  // Your code here
	}, [])
```

- ugh : generating useGetHooks **usage**. Because... why not!
```typescript
   	const {data:userList, loading:getUserListLoading} = useGetUserList();
```

- umh : generating useMutationHooks **usage**. Because... why not!
```typescript
   	const { mutateAsync: createUser } = useCreateUser({ action: () => {} });
```

- sbl : generating showBackDropLoader **usage**. Because...why not!
```typescript
    showBackdropLoader(true, 'Loading...');
```

- useAuth : generating useAuth **usage**. Because...why not!
```typescript
   	const { user } = useAuth();
```


### 1.0.0
adding first option(*generate-api-call*) in context menu

Initial release

**Enjoy!**
