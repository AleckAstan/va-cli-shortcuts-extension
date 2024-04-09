import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let generateApiCallDisposable = vscode.commands.registerCommand('extension.generateApiCall', async (uri: vscode.Uri) => {
		const folder = vscode.workspace.workspaceFolders?.[0];
		if (!folder) {
		  vscode.window.showErrorMessage('No folder is open in the workspace.');
		  return;
		}
	
		const terminal = vscode.window.createTerminal({
		  name: 'VA-CLI/Generate API Call',
		  cwd: uri.fsPath
		});
		terminal.sendText('va-cli generate-api-call');
		terminal.show();
	  });
	
	  context.subscriptions.push(generateApiCallDisposable);
}

export function deactivate() {}
