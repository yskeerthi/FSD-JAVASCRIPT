const addButton = document.getElementById('addButton');
        const dataTable = document.getElementById('dataTable');
        let isFirstClick = true;
        addButton.addEventListener('click', function() {
            if (isFirstClick) {
                dataTable.classList.remove('hidden');
                addRow('Keerthi', '22P31A4205', '19');
                addRow('Sonali', '22MH1A05H2', '15');
                addRow('Jitya', '22MH1A05G2', '18');
                isFirstClick = false;
            } else {
                const data1 = prompt('Enter Name:');
                const data2 = prompt('Enter Roll No');
                const data3 = prompt('Enter Age:');
                
                if (data1 !== null && data2 !== null && data3 !== null) {
                    addRow(data1, data2, data3);
                } else {
                    alert('Please enter valid data for all columns.');
                }
            }
            if (dataTable.rows.length === 0) {
                const headerRow = dataTable.insertRow();
                const headerCell1 = document.createElement('th');
                headerCell1.textContent = 'Name';
                headerRow.appendChild(headerCell1);

                const headerCell2 = document.createElement('th');
                headerCell2.textContent = 'Roll Number';
                headerRow.appendChild(headerCell2);

                const headerCell3 = document.createElement('th');
                headerCell3.textContent = 'Age';
                headerRow.appendChild(headerCell3);

                const headerCell4 = document.createElement('th');
                headerCell4.textContent = 'Actions';
                headerRow.appendChild(headerCell4);
            }
        });
        function addRow(data1, data2, data3) {
            const newRow = dataTable.insertRow();
            const dataCell1 = newRow.insertCell(0);
            dataCell1.textContent = data1;
            const dataCell2 = newRow.insertCell(1);
            dataCell2.textContent = data2;
            const dataCell3 = newRow.insertCell(2);
            dataCell3.textContent = data3;
            const actionsCell = newRow.insertCell(3);
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            updateButton.addEventListener('click', function() {
                updateRow(newRow, dataCell1, dataCell2, dataCell3);
            });
            actionsCell.appendChild(updateButton);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                deleteRow(newRow);
            });
            actionsCell.appendChild(deleteButton);
        }
        function updateRow(row, dataCell1, dataCell2, dataCell3) {
            const newData1 = prompt('Enter new data for name:', dataCell1.textContent);
            const newData2 = prompt('Enter new data for rollno:', dataCell2.textContent);
            const newData3 = prompt('Enter new data for age:', dataCell3.textContent);
            if (newData1 !== null) {
                dataCell1.textContent = newData1;
            }
            if (newData2 !== null) {
                dataCell2.textContent = newData2;
            }
            if (newData3 !== null) {
                dataCell3.textContent = newData3;
            }
        }
        function deleteRow(row) {
            row.remove();
            if (dataTable.rows.length === 1) { 
                dataTable.classList.add('hidden');
            }
        }
        const headerRow = dataTable.insertRow();
        const headerCell1 = document.createElement('th');
        headerCell1.textContent = 'Name';
        headerRow.appendChild(headerCell1);
        const headerCell2 = document.createElement('th');
        headerCell2.textContent = 'Roll No';
        headerRow.appendChild(headerCell2);
        const headerCell3 = document.createElement('th');
        headerCell3.textContent = 'Age';
        headerRow.appendChild(headerCell3);
        const headerCell4 = document.createElement('th');
        headerCell4.textContent = 'Actions';
        headerRow.appendChild(headerCell4);