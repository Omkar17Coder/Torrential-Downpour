#include<iostream>
using namespace std;
#include<vector>
int main(){
vector<string>ans;
string str="while a = 10 ";
string wr="";

int n=str.size();
for(int i=0;i<n;i++){
    if(str[i]!=' '){
        wr+=str[i];
    }
    if(str[i]==' '){
        ans.push_back(wr);
        wr.clear();

    }
}
for(auto it:ans){
    cout<<it;

}

}