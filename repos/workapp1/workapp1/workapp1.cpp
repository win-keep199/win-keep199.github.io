#include <Windows.h>

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PSTR szCmdLine, int iCmdShow)
{
	
	MessageBox(NULL, TEXT("这是我的第一个程序,你喜欢吗？"), TEXT("打招呼"), 1 | MB_ICONQUESTION);
	return 0;
}