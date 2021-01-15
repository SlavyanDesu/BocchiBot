#include <iostream>
using namespace std;
int main() {
    int i, n;
    float terbesar, bilangan;
    cout << "Masukkan jumlah bilangan: ";
    cin >> n;
    cout << endl;
    for (i = 0; i <= n; i++) {
        cout << "Masukkan bilangan ke-" << i << ": ";
        cin >> bilangan;

        if (i == 1) {
            terbesar = bilangan;

        } else if (bilangan > terbesar) {
            terbesar = bilangan;
        }
    }
    cout << "\nNilai terbesar adalah: " << terbesar << endl;
    return 0;
}